import os
import shutil
import json
import uuid

import requests
from bs4 import BeautifulSoup

def parse_images_from_xml():
    with open("site-data.xml", 'r') as fp:
        xml = fp.read()

    soup = BeautifulSoup(xml, 'lxml')
    imgs = soup.find_all('img')
    data = list()
    keys = ['src', 'alt', 'class', 'data-src', 'data-image-dimensions']
    for img in imgs:
        data.append({
            key: img.attrs.get(key)
            for key in keys
        })
    with open('image-data.json', 'w') as fp:
        json.dump(data, fp)


def download_images():
    with open('image-data.json', 'r') as fp:
        image_data = json.load(fp)

    n_fail = 0
    for i, image in enumerate(image_data):
        print('%d/%d' % (i + 1, len(image_data)))
        url = image['src'] or image['data-src']
        name = image['alt'] or os.path.basename(url)
        name = str(uuid.uuid4())
        image['filename'] = name

        response = requests.get(url)
        if not response.ok:
            image['status'] = 'FAILED'
            n_fail += 1
        else:
            image['status'] = 'DONE'

        with open('images/%s' % name, 'wb') as fp:
            fp.write(response.content)

    print('# failed: %d' % n_fail)

    with open('image-data.json', 'w') as fp:
        json.dump(image_data, fp)

def fix_images():
    with open('image-data.json', 'r') as fp:
        image_data = json.load(fp)

    for i, image in enumerate(image_data):
        url = image['src'] or image['data-src']
        ext = os.path.splitext(url)[1]
        if ext.find('?') > -1:
            ext = ext[:ext.find('?')]
        if not ext:
            ext = '.png'
            # print(json.dumps(image, indent=4))

        if os.path.exists('images/%s' % image['filename']):
            shutil.move('images/%s' % image['filename'], 'images/%s%s' % (image['filename'], ext))
        else:
            print('No file %s' % image['filename'])

    # with open('image-data.json', 'w') as fp:
    #     json.dump(image_data, fp)

# parse_images_from_xml()
# download_images()
fix_images()

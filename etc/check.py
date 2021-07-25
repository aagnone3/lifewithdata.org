import os
import re
from glob import glob
import yaml

fns = glob("static/assets/img/mlutd*")

def get_num(base):
    groups = re.findall(r"mlutd([0-9]+)([a-z]+[0-9]+)", base)
    return groups[0]


for asset_fn in fns:
    prefix, ext = os.path.splitext(asset_fn)
    base = os.path.basename(prefix)
    num, part = get_num(base)
    fn = f"newsletter/raw/machine-learning-up-to-date-{num}.yaml"

    if int(num) < 6 or not os.path.isfile(fn):
        continue

    with open(fn, 'r') as fp:
        data = yaml.safe_load(fp)
    section = [s for s in data['articles'] if s['name'] == part]

    if len(section) == 0:
        print(f"Could not find {part} in {fn}")
        continue
    if len(section) > 1:
        raise ValueError(f"Too many sections in {fn}")
    
    section = section[0]
    image_fn = os.path.basename(section['image'])
    if image_fn != os.path.basename(asset_fn):
        print(f"In {fn}, {image_fn} -> {os.path.basename(asset_fn)}")
        
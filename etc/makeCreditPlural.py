import os
import yaml
import yamlordereddictloader
from glob import glob

fns = glob('../newsletter/raw/*.yaml')
for fn in fns:
    with open(fn, 'r') as fp:
        content = yaml.load(fp, Loader=yamlordereddictloader.SafeLoader)
    
    for i in range(len(content['articles'])):
        if len(content['articles'][i]['excerpt']) == 5:
            content['articles'][i]['excerpt'] = '\n'
        content['articles'][i]['credit'] = [content['articles'][i]['credit']]

    with open(fn, 'w') as fp:
        yaml.dump(content, fp, default_flow_style=False, Dumper=yamlordereddictloader.Dumper)
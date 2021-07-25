import yaml
from jinja2 import Template

with open('machine-learning-up-to-date-template.jinja', 'r') as fp:
    content = fp.read()

with open('data_model.json', 'r') as fp:
    data_model = yaml.load(fp)

template = Template(content)
rendered = template.render(data_model)
with open('rendered.md', 'w') as fp:
    fp.write(rendered)

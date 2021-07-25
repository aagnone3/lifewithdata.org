
.PHONY: build
build:
	docker build -t aagnone/lifewithdata.org .

.PHONY: transfer
transfer:
	rsync \
		-avzru \
		--exclude='public/*' \
		--exclude='node_modules/*' \
		--exclude='.cache' \
		--exclude='.git' \
		. \
		ag:website
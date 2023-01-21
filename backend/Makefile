include .env

# =======================================================
# docker cmd
# =======================================================
build:
	docker-compose -p ${COMPOSE_PROJECT_NAME} up --build

up:
	docker-compose -p ${COMPOSE_PROJECT_NAME} up

down:
	docker-compose -p ${COMPOSE_PROJECT_NAME} down

rm:
	docker-compose -p ${COMPOSE_PROJECT_NAME} rm -fsv ${SERVICE_NAME_APP}
	docker-compose -p ${COMPOSE_PROJECT_NAME} rm -fsv ${SERVICE_NAME_DB}
	
stop:
	docker-compose -p ${COMPOSE_PROJECT_NAME} stop

restart:
	docker-compose -p ${COMPOSE_PROJECT_NAME} down
	docker-compose -p ${COMPOSE_PROJECT_NAME} up -d

destroy:
	docker-compose -p ${COMPOSE_PROJECT_NAME} down --rmi all --volumes

exec-container:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} sh


# ======================================================
# deno cmd
# ======================================================
create-migration:
	deno run -A --unstable https://deno.land/x/nessie/cli.ts make:migration ${ARG}

migrate:
	deno run -A --unstable --allow-env https://deno.land/x/nessie/cli.ts migrate

rollback:
	deno run -A --unstable --allow-env https://deno.land/x/nessie/cli.ts rollback
# =======================================================
# setup cmd
# =======================================================
setup:
	cp .env.sample .env
	make up

genapi:
	docker run --rm -v "${CURDIR}/../:/local" openapitools/openapi-generator-cli:v5.1.1 generate \
	-i /local/openapi/v1.yaml \
	-g typescript-fetch \
	-o /local/backend/src/adapter/api-client \
	--additional-properties=packageName=api
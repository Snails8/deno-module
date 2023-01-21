# https://hub.docker.com/r/denoland/deno
FROM denoland/deno:alpine-1.28.1

# RUN deno install --allow-read --allow-run --allow-write --allow-net -qAf --unstable https://deno.land/x/denon/denon.ts
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
# USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/server.ts
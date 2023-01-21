import {
    ClientPostgreSQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.10/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

/** Select one of the supported clients */
const client = new ClientPostgreSQL({
    database: Deno.env.get("POSTGRES_DB"),
    hostname: "localhost",
    port: 5433,
    user: Deno.env.get("POSTGRES_USER"),
    password: Deno.env.get("POSTGRES_PASSWORD"),
});

/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default config;

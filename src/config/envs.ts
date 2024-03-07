import 'dotenv/config'
import {get} from 'env-var'

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    NODE_ENV: get('NODE_ENV').asString(),
    API_URL: get('API_URL').required().asString(),
    API_HOTELBEDS_KEY: get('API_HOTELBEDS_KEY').required().asString(),
    API_HOTELBEDS_SECRET: get('API_HOTELBEDS_SECRET').required().asString()
} 
/**
 * Turns a "config" object into readable object.
 * @param  {Object} model
 * @return {Object}
 */
export function transformPlugins(config) {
    const allowed = ["@blockpool-io/core-api", "@blockpool-io/core-json-rpc", "@blockpool-io/core-webhooks"];

    const result = {};

    for (const [name, options] of Object.entries(config.plugins) as any) {
        if (allowed.includes(name)) {
            if (options.server) {
                result[name] = {
                    enabled: !!options.server.enabled,
                    port: +options.server.port,
                };

                continue;
            }

            result[name] = {
                enabled: !!options.enabled,
                port: +options.port,
            };
        }
    }

    return result;
}

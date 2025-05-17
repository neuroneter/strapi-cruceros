module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['y3vFVNYpJCCw+vLURBfULkUj/dq7WoxVZRLlPvMedPI=', 'ZO3n7a74Tb9/7Hna9FOWd0rSxVbKcldO3VTIHy1pmpY=']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

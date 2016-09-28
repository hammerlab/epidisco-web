epidisco-web
============

Web interface to easily describe and submit epidisco jobs

Quickstart
----------

First, set your app’s secret key as an environment variable. For example, add the following to `.bashrc` or `.bash_profile`.

```sourceCode
export EPIDISCO_WEB_SECRET='something-really-secret'
```

Before running shell commands, set the `FLASK_APP` and `FLASK_DEBUG` environment variables :

    export FLASK_APP=/path/to/epidisco-web/autoapp.py
    export FLASK_DEBUG=1

Then run the following commands to bootstrap your environment:

    git clone https://github.com/armish/epidisco-web
    cd epidisco-web
    pip install -r requirements/dev.txt
    npm install && npm run bundle
    flask run

You will see a pretty welcome screen.

Once you have installed your DBMS, run the following to create your app’s database tables and perform the initial migration :

    flask db init
    flask db migrate
    flask db upgrade
    flask run

Deployment
----------

In your production environment, make sure the `FLASK_DEBUG` environment variable is unset or is set to `0`, so that `ProdConfig` is used.

Shell
-----

To open the interactive shell, run :

    flask shell

By default, you will have access to the flask `app`.

Running Tests
-------------

To run all tests, run :

    flask test

Migrations
----------

Whenever a database migration needs to be made. Run the following commands :

    flask db migrate

This will generate a new migration script. Then run :

    flask db upgrade

To apply the migration.

For a full migration command reference, run `flask db --help`.

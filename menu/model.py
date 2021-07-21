"""Menu model (database) API."""
import sqlite3
import flask
import menu

#app = flask.Flask(__name__)

def dict_factory(cursor, row):
    """Convert database row objects to a dictionary."""
    output = {}
    for index, column in enumerate(cursor.description):
        output[column[0]] = row[index]
    return output

def get_db():
    """Open a new database connection."""
    if not hasattr(flask.g, 'sqlite_db'):
        flask.g.sqlite_db = sqlite3.connect('var/menu.sqlite3')
        flask.g.sqlite_db.row_factory = dict_factory
        flask.g.sqlite_db.execute("PRAGMA foregin_keys = ON")
    return flask.g.sqlite_db

@menu.app.teardown_appcontext
#@app.teardown_appcontext
def close_db(error):
    # pylint: disable=unused-argument
    """Close the database at the end of a request."""
    if hasattr(flask.g, 'sqlite_db'):
        flask.g.sqlite_db.commit()
        flask.g.sqlite_db.close()

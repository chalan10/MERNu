"""Index (main) view."""
import flask
import api

#app = flask.Flask(__name__)

@api.app.route('/')
#@app.route('/')
def index():
    """Display / route."""

    # Connect to database
    connection = api.model.get_db()

    # Query database
    cur = connection.execute(
            "SELECT username "
            "FROM users"
            )
    users = cur.fetchall()

    # Add database info to context
    context = {"users": users}
    return flask.render_template("index.html", **context)

@api.app.route('/hello/')
def hello():
    return "Hello World!"

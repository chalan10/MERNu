"""Menu index (main) view."""
import flask
import menu

#app = flask.Flask(__name__)

@menu.app.route('/')
#@app.route('/')
def index():
    """Display / route."""

    # Connect to database
    connection = menu.model.get_db()

    # Query database
    cur = connection.execute(
            "SELECT username "
            "FROM users"
            )
    users = cur.fetchall()

    # Add database info to context
    context = {"users": users}
    return flask.render_template("index.html", **context)

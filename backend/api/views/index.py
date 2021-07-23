"""Index (main) view."""
import flask
import api

@api.app.route('/')
def index():
    """Display / route."""

    # Connect to database
    connection = api.model.get_db()

    # Query database
    cur = connection.execute("SELECT username FROM users")
    users = cur.fetchall()

    # Add database info to context
    context = {"users": users}
    return flask.render_template("index.html", **context)

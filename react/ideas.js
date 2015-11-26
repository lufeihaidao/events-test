var IdeaBox = React.createClass({
  render: function() {
    return (
        <div className="ideaBox">
        <IdeaList />
        <IdeaForm />
        </div>
    );
  }
});
var IdeaList = React.createClass({
  render: function() {
    return (
      <div className="extra ui list" >
      Hello, world! I am a CommentList.
        </div>
    );
  }
});
var IdeaForm = React.createClass({
  render: function() {
    return (
        <div className="ui action input">
        Hello, world! I am a CommentForm.
        </div>
    );
  }
});
React.render(
    <IdeaBox />,
  document.getElementById('event-ideas')
);

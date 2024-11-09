function EventCard({ details }) {
  const { image, category, title, text } = details;

  const cardHeaderStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <article className="card">
      <header style={cardHeaderStyle} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
      <div className="card-body">
        <p className="date">March 20 2015</p>
        <h2>{title}</h2> <p className="body-content">{text}</p>
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      </div>
    </article>
  );
}
export default EventCard;

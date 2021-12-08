const Circles = (props) => {
  return (
    <div className="Circles">
  <>
    {props.circles.map((circle, idx) =>
      <div className={props.circleSelected === idx ? "selected" : ""}>
      {props.circleSelected === idx ? `${circle}` : `${circle}`}
      </div>
    )}
  </>
</div >
  );
}

export default Circles;


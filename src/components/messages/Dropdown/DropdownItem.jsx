import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <div
        className="menu-item"
        onClick={props.onClick}
      >

        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />


        {props.children}
       
      </div>
    </>
  );
};

export default DropdownItem;

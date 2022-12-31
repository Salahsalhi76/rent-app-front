import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <div
        className="menu-item"
        onClick={() =>{}}
        >
                    <img  src="https://media.licdn.com/dms/image/D4E03AQEgqUpiDA7Ldg/profile-displayphoto-shrink_100_100/0/1670507548841?e=1677715200&v=beta&t=oC3NmZkCOho5oBpwBP9JzqM0J0EUhaj6rL1B2HLbo70"/>

          {props.children}
      </div>
    </>
  );
};

export default DropdownItem;

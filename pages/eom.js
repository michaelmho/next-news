import Toolbar from "../components/toolbar";
import classes from "../styles/EOM.module.css";

const EOM = ({ employee }) => {
  console.log(employee);

  return (
    <div className="page-container">
      <Toolbar />
      <div className={classes.main}>
        <h1>Employee Of the Month</h1>
        <div className={classes.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h3>{employee.position}</h3>
          <img src={employee.image} />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;

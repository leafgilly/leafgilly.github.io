import { Link } from "react-router-dom";
import DocList from "./DocList";

const Page2 = () => {
    return (
     <><><h1>This is the second page</h1>
        <p>
          <Link color="red" to="/">Go to Page1</Link>
        </p></><DocList />
        <h1>Testing Out Some Glitch Paragraphs</h1>
        {/* TODO:
        2. INPUT DUMMY TEXT AND JUST START CODING WEIRD INTERACTIONS PER CHARACTER
        3. CREATE A TEXT ENTRY BOX IN BRIENNE THAT IS INACTIVE EVEN TO 'BRIENNE WILLIAMS' UNTIL LATER */}
        
        </>
    )
  };
  
  export default Page2;
  
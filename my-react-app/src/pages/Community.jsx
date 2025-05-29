import Header from "../comps/Header";
import Discord from "../comps/Discord";
import YouTube from "../comps/YouTube";
import Card from "../comps/Card";
import LinkedIn from "../comps/LinkedIn";

function Community() {
  return (
    <>
      <Header></Header>
      <div className="community-main">
        <Card>
          <Discord></Discord>
        </Card>
        <Card>
          <YouTube></YouTube>
        </Card>
        <Card>
          <LinkedIn></LinkedIn>
        </Card>
      </div>
    </>
  );
}

export default Community;

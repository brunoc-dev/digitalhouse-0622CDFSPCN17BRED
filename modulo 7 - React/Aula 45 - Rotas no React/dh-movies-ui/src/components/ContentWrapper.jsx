import Dashboard from "./Dashboard";
import Footer from "./Footer";
import TopBar from "./TopBar";

export function ContentWrapper(){
  return(
    <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<Dashboard />
			</div>

			<Footer />
		</div>
  )
}
import ContentWrapper from './ContentWrapper';
import Sidebar from './Sidebar';


function PageWrapper() {
    return (
        <div>
            
            <div id="wrapper">
                <Sidebar />

                <ContentWrapper />

            </div>
            
        </div>
    )
}

export default PageWrapper
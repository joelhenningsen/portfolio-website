function HomePage() {
    return (
        <>
            <h2>Home Page</h2>
            <article>
                <p>
                    I finished my first bachelor's degree in March 2022 with a major in
                    BioHealth Sciences. After working for a half year, I realized I was very
                    interested in the technology side of the industry. Through that discovery, I
                    decided to return to Oregon State and start their online postbaccalaureate
                    computer science program. The goal I have for my future career is to be a
                    software engineer and a company that works in the health sciences industry,
                    but on the technological side of it.
                </p>
                <p>
                    The website is my portfolio project for CS 290 - Web Development and is the 
                    culmination of my efforts over the past term to implement all four aspects of
                    MERN: MongoDB, Express, React, and Node. 
                </p>
                <ul>
                    <li>
                        <strong>MongoDB</strong> is the document-oriented database for this website,
                        which stores the documents in a BSON format. The database is being hosted on 
                        <strong> Atlas Cloud</strong> in a Cluster.
                    </li>
                    <li>
                        <strong>Express</strong> is used as the framework for the back-end, which 
                        handles all API interactions as well as middleware and routing.
                    </li>
                    <li>
                        For the front-end, <strong>React</strong> has been implemented, which allows
                        the creation of reusable components.
                    </li>
                    <li>
                        <strong>Node</strong> is being used as the runtime environment, with
                        <strong> JavaScript</strong> files which were written for the server-side
                        application.
                    </li>
                    <li>
                        This application I've created can also perform all <strong>CRUD </strong> 
                        operations of creating, reading, updating, and deleting.
                    </li>
                    <li>
                        This is done using the <strong>REST API</strong> endpoints, which allows the
                        front-end to communicate with the back-end.
                    </li>
                </ul>
            </article>
        </>
            );
        }
        export default HomePage
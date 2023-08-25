function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#optimizing">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    The <strong>index</strong> of a web server is considered to be the
                    designated homepage. By default, the path to a resource in a URL will often
                    default to this resource: /index.html. In the case of this web page, which
                    is hosted on Oregon State's Apache Web Server, index is used as the default
                    name. Depending on the server, there are other defaults such as default.html
                    for Microsoft's .NET, and potentially even index.js or index.php. As an
                    example, if one were to navigate to the following URL,
                    https://www.google.com/, the "/" at the end is defaulting to the index
                    resource at that server, or in other words, the designated homepage. When a
                    <strong> GET request</strong> is received and the file path is just a "/",
                    this will be the default.
                </p>
                <p>
                    The first difference that can be seen when comparing the difference between
                    the web server versus the local computer is the name of the file. On local,
                    it is showing as <strong>index.html</strong>, while on the server it shows
                    as <strong>a1-hennijoe/</strong>. Next, the request URL is different, as the
                    server has the location on Oregon State's server using an <strong>HTTPS
                    scheme</strong> to access it, while local uses the file scheme to access the
                    resource on the hard drive. The biggest difference is the response and
                    request headers. For the local file, only few things are shown such as:
                    content-type, last-modified, and the provisional request headers. This is in
                    stark contrast to the amount of information in the response and request
                    headers that are actually present for the server. The request has a request
                    line and the request headers, while the response has the status line and
                    response headers.
                </p>
                <p>
                    The <strong>favicon.ico</strong>, or more easily understood as the favorites
                    icon, has a status code of <strong>200 OK</strong> on the Oregon State
                    server due to the fact that the server automatically provides that favicon.
                    Therefore, this resource will be found by default on any of the resources
                    accessed on this server. When comparing to the main.css and main.js files,
                    those resources were not added to this location and also are not provided by
                    default for the server. Therefore, the status code given in the status line
                    of the response is <strong>404 Not Found</strong> because the resources
                    simply do not exist.
                </p>
                <p>
                    The <strong>URL</strong> of this web file is
                    "https://web.engr.oregonstate.edu/~hennijoe/a1-hennijoe/". The
                    <strong> scheme</strong> is HTTPS, which is the <strong>Hypertext Transfer
                    Protocol Secure (encrypted)</strong>. There are two in web.engr, and each
                    are separated by the comma. They both come before the <strong>host
                    domain</strong>, meaning it is a subsection of the server. Next, the host
                    name is oregonstate.edu, which is the name of the machine where the web file
                    is being hosted. Lastly, the <strong>resources</strong> are in this path:
                    "~hennijoe/a1-hennijoe/". This path defaults to the index.html webpage as
                    discussed previously, which is this one.
                </p>
            </article>
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>
                    <strong>Frontend design</strong> plays into what a user will see and how
                    they will interact with an experience. The goal of it is to make a user
                    interface that allows for a pleasant experience. Being successful in
                    frontend design means one there are constants, consistencies, and a
                    thoughtful way of communicating the elements to the user. This encompasses:
                    fonts, color pallets, photographs, iconography, and a well-thought-out and
                    easy to navigation panel.
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Being helpful in helping the user achieve their goal.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Allows the user to achieve their goal quickly by minimizing the number
                    of steps required.</dd>
                    <dt><strong>Easy to Navigate</strong></dt>
                    <dd>Keeps the user from being lost on the web page, keeps a simplistic style
                    and navigational layout.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Removes errors from existing on the webpage which could cause the user
                    to stumble and become stuck. Removes any accessibility issues.</dd>
                    <dt><strong>Enjoyable/Engaging</strong></dt>
                    <dd>Engages with the correct audience in a manner fit for that specific
                    group.</dd>
                </dl>
                <p>
                    <strong>Page Layout Tags</strong> are important for the simple reason that
                    they help break up different types of content within the web page. Before
                    HTML 5, the <strong>&lt;div&gt;</strong> tag was typically used to enclose
                    pieces of text. However, HTML 5 introduced multiple new types of page tags
                    that help the developer keep various pieces of content separate. Along with
                    this, robots that deal with search engines scrape web pages and read the
                    page layout tags for to understand the different parts. Here are some
                    examples of page layout tags: The <strong>&lt;header&gt;</strong> tag is
                    used to denote a name, publisher, and marketing slogan. The
                    <strong>&lt;nav&gt;</strong> tag is used to encompass the navigation menu.
                    The <strong>&lt;main&gt;</strong> tag is the main block that contains
                    content on a webpage. The <strong>&lt;section&gt;</strong> tag is what
                    holds a specific group of content within the <strong>&lt;main&gt;</strong>
                    tag. The <strong>&lt;article&gt;</strong> tag is used inside the
                    <strong>&lt;section&gt;</strong> tag, and clarifies a specific topic/header.
                    The <strong>&lt;footer&gt;</strong> tag is used at the end of a web page to
                    hold a footer element which can hold contact information, links to other
                    pages, legal information, and copyright. The <strong>&lt;div&gt;</strong>
                    tag is used as a neutral tag that can dynamically hold content or be used
                    when no other page layout tag properly fits the content. The headline tags
                    <strong>&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,
                    &lt;h6&gt;</strong> provide a hierarchical structure for content on the web
                    page, and show the level of importance for each piece of information.
                </p>
                <ol>
                    <li>
                        Anchors link to <strong>external content</strong> through the use of a
                        <strong>href</strong> attribute inside the
                        <strong>&lt;anchor&gt;</strong> tag. This could be something like a URL.
                    </li>
                    <li>
                        Anchors link to <strong>internal content</strong> through the use of
                        <strong> IDs</strong>. A target element will get an ID, and then a link
                        to the target element can be made through the use of a
                        <strong>href</strong> attribute inside the
                        <strong>&lt;anchor&gt;</strong> tag. This would link to the ID, and one
                        would need to put a <strong>#</strong> in front of the ID to reference
                        it.
                    </li>
                    <li>
                        Anchors link from <strong>page-to-page</strong> through the use of a
                        <strong>href</strong> attribute inside the
                        <strong>&lt;anchor&gt;</strong> tag. The anchor would be placed inside
                        a <strong>&lt;nav&gt;</strong>, and the href will link to a specific
                        HTML file, such as <strong>contact.html</strong>.
                    </li>
                </ol>
            </article>
            <article id="optimizing">
                <h3>Optimizing Images</h3>
                <p>There are 6 major specifications for images on the web. Having a
                <strong> descriptive filename</strong> is important because it helps with search
                engine optimization (SEO), and gives enough information for the website to be
                easily located. Next, keeping <strong>small file sizes</strong> is significant
                for having the quickest load time possible. Having <strong>exact
                dimensions</strong> for any images needed will help keep server space, and allow
                for faster load times. Next, having the <strong>correct file format</strong> is
                essential because the various formations such as JPG or PNG are optimized in
                different ways depending on what is needed to be displayed in the image. Also,
                providing <strong>multiple images sizes</strong> is key so, there are
                options that can be loaded depending on the resolution of the monitor being used
                to display the webpage. Again, this comes down to speed and load times. The
                final specification is <strong>color mode</strong>, and keeping consistent with
                whichever color mode is being used. Frontend developers will typically have this
                laid out for them by a brand, so there is no confusion on color pallets and the
                various modes.</p>
                <p>There are multiple types of file formats available, but the ones most
                commonly used for the web are GIF, PNG, SVG, JPG, and WebP. <strong>SVG </strong>
                can be scaled mathematically and comes across sharp, which is great for
                line art. <strong>GIF</strong> is commonly used on the web and used for line
                art. <strong>PNG</strong> files are also one of the more common files found on
                the web, and are typically used for line art due to having true transparency.
                They are used for photos sometimes, but tend to come out more pixelated.
                <strong> JPG</strong> files and <strong>WebP</strong> files are the final two,
                and both of them are used to display photographic images due to their impressive
                compression and keeping smaller file sizes. WebP is different, however, in that
                it can have transparent backgrounds.</p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are small logos that are placed in a browser tab,
                on a phone, or any other smart device to help identify the website/application
                that is being used. Browsers use favicons to identify or launch a website, while
                a device may use a favicon to identify or launch an application. Favicons can be
                saves in a variety of photo formats: PNG, ICO, SVG, or GIF. There will be
                multiple version of the favicon stores in the root directory of the webpage or
                application, and depending on what the resolution needed by the computer the
                correct version will be chosen to be displayed.</p>
            </article>
        </>
            );
        }
        export default TopicsPage
import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {

    const rowCard1Data=(title, description) => ({
        title: title,
        description:description,
      });

return (
  <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'space-around', padding: '20px' }}>
    {/* Column 1 */}
    <div style={{border: '2px solid #ccc',padding: '100px', width: '100%', paddingVertical: '20px', paddingHorizontal: '20px', marginBottom: '20px' }}>
      <div style={{alignItems:'center', justifyContent: 'center', display:'flex' }}>
      <h3>Column 1</h3>
      </div>
      <div style={{display: 'flex', flexDirection:'row',width: '100%', justifyContent: 'space-between', padding: '10px' }}>
      <div style={{ border: '1px solid #ddd',flexDirection:'row', margin: '10px 0', padding: '10px' }}>
        <Link 
        to="/row-card-1" 
        state={rowCard1Data('Row Card 1', 'This is the data passed from HomeScreen to RowCard1Screen.')}
        style={{ textDecoration: 'none', color: 'black' }}>
        Row Card 1
        </Link>
       
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 2
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 3
      </div>
      </div>
    </div>

    {/* Column 2 */}
    <div style={{ border: '1px solid #ccc', padding: '100px', width: '100%' }}>
      <h3>Column 2</h3>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 1
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 2
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 3
      </div>
    </div>

    {/* Column 3 */}
    <div style={{ border: '1px solid #ccc', padding: '100px', width: '100%' }}>
      <h3>Column 3</h3>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 1
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 2
      </div>
      <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
        Row Card 3
      </div>
    </div>
  </div>
);

}

export default HomeScreen;






//   return (
//     <div>

//       {/*  <h1> to <h6>
// Heading tags for different levels of headings.

// }
//  */}
//      <h1>my first page</h1>
//      <h2>my first page</h2>
//      <h3>my first page</h3>
//      <h4>my first page</h4>
//      <h5>my first page</h5>
//      <h6>my first page</h6>

//      {/* <p>
// Used for paragraphs. */}
//      <p>this for paragraph</p>

//      {/* <span>
// Inline container for text or elements. */}
//      <span>this is inline text.</span>

//      {/* <ul> and <li>
// Unordered list with list items. */}
//      <div>
//       <ul>
//       <li>item 1</li>
//       <li>item 2</li>
//       <li>item 3</li>
//       <li>item 4</li>
//       </ul>
//      </div>

//      {/* <ol> and <li>
// Ordered list with list items.

//  */}
//      <div>
//       <ol>
//       <li>item 1</li>
//       <li>item 2</li>
//       <li>item 3</li>
//       <li>item 4</li>
//       </ol>
//      </div>

// {/* <img>
// Used to display images. */}
//      <div>
//       <img src="https://via.placeholder.com/150" alt="Placeholder" />
//     </div>


// {/* <a>
// Anchor tag for links. */}
//     <div>
//       <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//         Visit React
//       </a>
//     </div>


// {/* <button>
// Button for user interaction. */}
//     <div>
//       <button onClick={() => alert('Button clicked!')}>Click Me</button>
//     </div>

   
//    {/* <input>
// Input field for user input. */}
//     <div>
//       <input type="text" placeholder="Enter text here" />
//     </div>

//     {/* <form>
// Form for user input submission. */}

//     <form>
//       <input type="text" placeholder="Name" />
//       <button type="submit">Submit</button>
//     </form>

// {/* <table>, <thead>, <tbody>, <tr>, <td>, <th>
// Used for creating tables. */}
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>John</td>
//           <td>30</td>
//         </tr>
//         <tr>
//           <td>Jane</td>
//           <td>25</td>
//         </tr>
//       </tbody>
//     </table>


// {/* <section>
// Defines a section in a document. */}
//     <section>
//       <h2>Section Title</h2>
//       <p>This is a section.</p>
//     </section>

// {/* <header> and <footer>
// Used for page headers and footers. */}
//     <div>
//       <header>
//         <h1>Header</h1>
//       </header>
//       <footer>
//         <p>Footer</p>
//       </footer>
//     </div>


// {/* <article>
// Defines an independent piece of content. */}
//     <article>
//       <h2>Article Title</h2>
//       <p>This is an article.</p>
//     </article>


// {/* <nav>
// Defines navigation links. */}
//     <nav>
//       <a href="#home">Home</a>
//       <a href="#about">About</a>
//       <a href="#contact">Contact</a>
//     </nav>


// {/* <aside>
// Defines content aside from the main content. */}
//     <aside>
//       <p>This is an aside section.</p>
//     </aside>



//     {/* <iframe>
//     Embeds another HTML page. */}
//     <iframe
//       src="https://reactjs.org"
//       title="React"
//       width="600"
//       height="400"
//     ></iframe>

//     </div>
//   );

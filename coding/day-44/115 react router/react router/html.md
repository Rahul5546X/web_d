### Interview questions ###


```
What is HTML?
What are the new features introduced in HTML5?
What is the difference between HTML and XHTML?
What are the basic building blocks of an HTML document?
What is the purpose of <!DOCTYPE> declaration in HTML?
What are the different types of heading tags in HTML?
Explain the purpose of <meta> tags in HTML.
What is the difference between <div> and <span> tags?
What is semantic HTML? Provide examples.
Explain the purpose of alt attribute in <img> tag.
What are empty elements in HTML? Give examples.
What is the difference between <strong> and <b> tags?
Explain the difference between <ol>, <ul>, and <dl> tags.
What is the purpose of the <figure> and <figcaption> tags?
How do you create a hyperlink in HTML?
What is the difference between absolute and relative URLs?
Explain the concept of HTML entities. Give examples.
What are the different types of lists in HTML?
What is the purpose of the <iframe> tag? Give an example.
How do you embed videos in HTML?
Explain the use of the <audio> tag in HTML5.
What are HTML forms? Explain the different form elements.
What is the purpose of the <label> tag in forms?
What is the role of the enctype attribute in forms?
How do you create a dropdown list in HTML?
Explain the purpose of the <table> tag in HTML.
What are the different table elements in HTML?
What is the purpose of colspan and rowspan attributes in HTML tables?
How do you create a responsive website using HTML?
Explain the role of the <nav> tag in HTML5.
What is the purpose of the <header> and <footer> tags?
How do you add comments in HTML?
Explain the role of the <section> tag in HTML5.
What is the purpose of the <aside> tag in HTML5?
How do you include CSS stylesheets in HTML documents?
What is the difference between <script> and <style> tags?
What is the purpose of the rel attribute in <link> tag?
How do you create a horizontal line in HTML?
Explain the difference between block-level and inline elements.
What is the purpose of the <abbr> tag in HTML?
How do you create a tooltip in HTML?
What is the role of the <canvas> tag in HTML5?
How do you create a progress bar in HTML?
What are the advantages of using HTML5 over previous versions?
Explain the purpose of the contenteditable attribute in HTML.
What is the purpose of the <time> tag in HTML5?
How do you create a subscript and superscript text in HTML?
Explain the role of the <ruby> and <rt> tags in HTML.
What is the purpose of the <blockquote> tag in HTML?
How do you create a form validation in HTML?
```




```
Q1 What is HTML?

HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages and web applications.
```


```
Q2 What are the new features introduced in HTML5?

New features introduced in HTML5 include semantic elements, audio and video support, canvas, local storage, geolocation, and more.
```


```
Q3 What is the difference between HTML and XHTML?

XHTML is a stricter and cleaner version of HTML that adheres to XML syntax rules. It requires well-formed documents, lowercase tag names, and properly nested elements.
```


```
Q4 What are the basic building blocks of an HTML document?

The basic building blocks of an HTML document include elements such as <html>, <head>, <title>, and <body>.
```


```
Q5 What is the purpose of <!DOCTYPE> declaration in HTML?

The <!DOCTYPE> declaration specifies the document type and version of HTML used in the document. It helps the browser to render the document correctly.
```



```
Q6 What are the different types of heading tags in HTML?

Heading tags in HTML include <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>, where <h1> represents the highest level of heading.
```


```
Q7 Explain the purpose of <meta> tags in HTML.

<meta> tags provide metadata about the HTML document. They include information such as character encoding, viewport settings, authorship, and keywords.
```


```
Q8 What is the difference between <div> and <span> tags?

<div> is a block-level element used to group and style content, while <span> is an inline element used for styling smaller parts of text within a block-level element.
```


```
Q9 What is semantic HTML? Provide examples.

Semantic HTML refers to using HTML elements that convey meaning to both the browser and developer. Examples include <header>, <footer>, <nav>, <article>, <section>, and <aside>.
```


```
Q10 Explain the purpose of alt attribute in <img> tag.

The alt attribute in the <img> tag provides alternative text for the image, which is displayed if the image fails to load or for accessibility purposes.
```

```
Q11 What are empty elements in HTML? Give examples.

Empty elements in HTML are elements that do not have any content between their opening and closing tags. Examples include <br>, <img>, <input>, <hr>, and <meta>.
```

```
Q12 What is the difference between <strong> and <b> tags?

Both <strong> and <b> tags are used to apply bold formatting to text. However, <strong> is a semantic element indicating strong importance, while <b> is purely presentational.
```

```
Q13 Explain the difference between <ol>, <ul>, and <dl> tags.

<ol> is used to create ordered lists, <ul> is used to create unordered lists, and <dl> is used to create description lists (lists of term-description pairs).
```

```
Q14 What is the purpose of the <figure> and <figcaption> tags?

The <figure> tag is used to encapsulate self-contained content, such as images, illustrations, diagrams, or code snippets. The <figcaption> tag provides a caption for the content within a <figure> element.
```

```
Q15 How do you create a hyperlink in HTML?

You can create a hyperlink in HTML using the <a> (anchor) tag with the href attribute specifying the URL of the target resource.
html
Copy code

<a href="https://example.com">Link Text</a>
 
```


```
Q16 What is the difference between absolute and relative URLs?
An absolute URL specifies the full web address of a resource, including the protocol (e.g., https://) and domain name (e.g., example.com). A relative URL specifies the path to a resource relative to the current document.
html
Copy code
<!-- Absolute URL -->

<a href="https://example.com">Absolute Link</a>

<!-- Relative URL -->
<a href="about.html">Relative Link</a>

```

```
Q17 Explain the concept of HTML entities. Give examples.
HTML entities are special codes used to display reserved characters and symbols in HTML. For example, &lt; represents the less-than sign (<), &gt; represents the greater-than sign (>), and &amp; represents the ampersand (&).
html
Copy code

<p>&copy; 2023 Example Company</p>

```

```
Q18 What are the different types of lists in HTML?
The different types of lists in HTML are ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>).
html
Copy code
<!-- Ordered List -->

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>

<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Description List -->
<dl>
  <dt>Term 1</dt>
  <dd>Description 1</dd>
  <dt>Term 2</dt>
  <dd>Description 2</dd>
</dl>

```

```
Q19 What is the purpose of the <iframe> tag? Give an example.
The <iframe> tag is used to embed another HTML document within the current document. It is often used for embedding videos, maps, or external web pages.
html
Copy code

<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

```

```
Q20 How do you embed videos in HTML?
You can embed videos in HTML using the <video> tag, specifying the video file or URL using the src attribute.
html
Copy code

<video controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

```

```
Q21 Explain the use of the <audio> tag in HTML5.
The <audio> tag is used to embed audio content, such as music or sound effects, into a web page. You can specify the audio file using the src attribute.
html
Copy code

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>

```

```
Q22 What are HTML forms? Explain the different form elements.
HTML forms are used to collect user input on a web page. Form elements include <input>, <textarea>, <select>, <button>, and <label>.
html
Copy code

<form>
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Submit</button>
</form>

```

```
Q23 What is the purpose of the <label> tag in forms?
The <label> tag is used to associate a label with a form control, improving accessibility and usability. Clicking on the label focuses or activates the associated form control.
html
Copy code

<label for="username">Username
<label for="username">Username:</label>
<input type="text" id="username" name="username">

```

```
Q24 What is the role of the enctype attribute in forms?
The enctype attribute specifies how form data should be encoded before it is sent to the server. Common values include application/x-www-form-urlencoded, multipart/form-data, and text/plain.
html
Copy code

<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
  <button type="submit">Upload</button>
</form>

```

```
Q25 How do you create a dropdown list in HTML?
You can create a dropdown list (select box) in HTML using the <select> element with one or more <option> elements nested inside.
html
Copy code

<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

```

```
Q26 Explain the purpose of the <table> tag in HTML.
The <table> tag is used to create tables in HTML, which organize data into rows and columns. It contains one or more <tr> (table row) elements, which in turn contain <td> (table data/cell) or <th> (table header) elements.
html
Copy code

<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
</table>

```


```
Q27 What are the different table elements in HTML?

The different table elements in HTML include <table>, <tr> (table row), <td> (table data/cell), <th> (table header), <thead>, <tbody>, <tfoot>, and <caption>.
What is the purpose of colspan and rowspan attributes in HTML tables?

The colspan attribute specifies the number of columns a table cell should span, while the rowspan attribute specifies the number of rows a table cell should span.
html
Copy code

<table border="1">
  <tr>
    <td colspan="2">Header Cell</td>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
</table>

```

```
Q28 How do you create a responsive website using HTML?
To create a responsive website using HTML, you can use CSS media queries, viewport meta tag, and flexible layout techniques such as CSS Grid and Flexbox.
html
Copy code

<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @media screen and (max-width: 600px) {
      /* CSS styles for small screens */
    }
  </style>
</head>
<body>
  <!-- HTML content -->
</body>
</html>

```

```
Q29 Explain the role of the <nav> tag in HTML5.
The <nav> tag is used to define a section of navigation links in a document. It typically contains links to other pages within the website or sections within the current page.
html
Copy code

<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

```

```
Q30 What is the purpose of the <header> and <footer> tags?
The <header> tag represents a header section at the top of a document or a section, while the <footer> tag represents a footer section at the bottom of a document or a section.
html
Copy code

<header>
  <h1>Website Header</h1>
  <nav>
    <!-- Navigation links -->
  </nav>
</header>
<footer>
  <p>&copy; 2023 Example Company</p>
</footer>

```

```
Q31 How do you add comments in HTML?
You can add comments in HTML using the <!-- --> syntax. Comments are not displayed in the browser and are used for adding notes or explanations in the code.
html
Copy code
<!-- This is a comment -->
```

```
Q32 Explain the role of the <section> tag in HTML5.
The <section> tag is used to define sections within a document, typically with a thematic grouping of content. It helps to organize content into meaningful sections.
html
Copy code

<section>
  <h2>Section Title</h2>
  <!-- Section content -->
</section>

```

```
Q33 What is the purpose of the <aside> tag in HTML5?
The <aside> tag is used to
define content that is tangentially related to the content around it, such as sidebars or pull quotes. It represents content that is considered separate from the main content but still relevant to it.

html
Copy code

<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>
</article>

```

```
Q34 How do you include CSS stylesheets in HTML documents?
You can include CSS stylesheets in HTML documents using the <link> tag with the href attribute pointing to the CSS file, or by using the <style> tag with CSS rules directly within the HTML document.
html
Copy code

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">

<!-- Internal CSS -->
<style>
  body {
    font-family: Arial, sans-serif;
  }
</style>

```

```
Q35 What is the difference between <script> and <style> tags?
The <script> tag is used to include JavaScript code in HTML documents, while the <style> tag is used to define CSS styles directly within the HTML document.
html
Copy code

<!-- JavaScript -->
<script>
  console.log('Hello, World!');
</script>

<!-- CSS -->
<style>
  body {
    background-color: #f0f0f0;
  }
</style>

```

```
Q36 What is the purpose of the rel attribute in <link> tag?
The rel attribute in the <link> tag specifies the relationship between the current document and the linked resource (e.g., stylesheet, icon). Common values include stylesheet, icon, prev, next, and canonical.
html
Copy code

<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico">
How do you create a horizontal line in HTML?
You can create a horizontal line (horizontal rule) in HTML using the <hr> tag.
html
Copy code
<hr>

```

```
Q37 Explain the difference between block-level and inline elements.
Block-level elements start on a new line and take up the full width available, while inline elements do not start on a new line and only take up as much width as necessary.
html
Copy code

<!-- Block-level element -->
<div>This is a block-level element</div>

<!-- Inline element -->
<span>This is an inline element</span>

```

```
Q38 What is the purpose of the <abbr> tag in HTML?
The <abbr> tag is used to define an abbreviation or acronym, optionally providing a full description of the term using the title attribute.
html
Copy code

<abbr title="World Wide Web">WWW</abbr>
```

```
Q39 How do you create a tooltip in HTML?
You can create a tooltip in HTML by adding the title attribute to an element. When the user hovers over the element, the browser displays the tooltip with the specified text.
html
Copy code

<button title="Click me">Hover over me</button>

```

```
Q40 What is the role of the <canvas> tag in HTML5?
The <canvas> tag is used to draw graphics, animations, or interactive content on a web page using JavaScript.
html
Copy code

<canvas id="myCanvas" width="200" height="100"></canvas>

```

```
Q41 How do you create a progress bar in HTML?
You can create a progress bar in HTML using the <progress> tag, specifying the current value and maximum value of the progress.
html
Copy code

<progress value="50" max="100"></progress>

```

```
Q42 What are the advantages of using HTML5 over previous versions?

HTML5 offers several advantages over previous versions, including support for new multimedia elements (audio, video), improved semantics with new structural elements (header, footer), native form validation, canvas for graphics, and support for geolocation and local storage.
```

```
Q43 Explain the purpose of the contenteditable attribute in HTML.

The contenteditable attribute allows the content of an element to be editable by the user. It can be applied to elements such as <div>, <p>, or <span>.
html
Copy code

<div contenteditable="true">Editable content</div>


```
```
Q44 What is the purpose of the <time> tag in HTML5?
The <time> tag is used to represent a specific time or date, providing machine-readable content for better accessibility and search engine optimization.
html
Copy code
<p>Published on <time datetime="2023-01-01">January 1, 2023</time></p>
```

```
Q45 How do you create a subscript and superscript text in HTML?
You can create subscript and superscript text in HTML using the <sub> and <sup> tags, respectively.
html
Copy code

H<sub>2</sub>O (subscript)
x<sup>2</sup> (superscript)


```

```
Q46 Explain the role of the <ruby> and <rt> tags in HTML.
The <ruby> tag is used to annotate characters with pronunciation or meaning, typically used in East Asian typography. The <rt> tag provides pronunciation information for characters within a <ruby> element.
html
Copy code

<ruby>
  漢 <rt>Hàn</rt> 字 <rt>zì</rt>
</ruby>

```


```
Q47 What is the purpose of the <blockquote> tag in HTML?
The <blockquote> tag is used to indicate that a section of text is quoted from another source. It typically renders with an indentation to distinguish it from surrounding text.
html
Copy code

<blockquote>
  <p>This is a quoted text.</p>
</blockquote>

```


```
Q48 How do you create a form validation in HTML?
You can perform form validation in HTML using attributes such as required, pattern, min, max, and maxlength. Additionally
```
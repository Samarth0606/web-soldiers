// let rootEl = document.getElementById("root");

// let h1 = document.createElement("h1");
// h1.classList.add("sam");
// h1.innerHTML = "hi i am h1 of DOM";

// rootEl.append(h1);

// ------------------------------------------

// let h1 = React.createElement("h1", null, "hello from h1 via ract");
// let h2 = React.createElement(
//   "h2",
//   { id: "sam", className: "vohra" },
//   "hello from h2 via ract"
// );

// let rootEl = document.getElementById("root");

// ReactDOM.render(h1, rootEl);
//  //17

// -------------------------
// let h1 = React.createElement("h1", null, "hello from h1 via ract");
// let h2 = React.createElement(
//   "h2",
//   { id: "sam", className: "vohra" },
//   "hello from h2 via ract"
// );

// // let rootEl = document.getElementById("root");

// // ReactDOM.createRoot(rootEl)
// //or

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([h1, h2]);

// ------------------------------

// let el = React.createElement("div", null, [
//   React.createElement(
//     "h1",
//     null,
//     React.createElement("span", null, "i am span inside h1")
//   ),
//   React.createElement("p", null, "helloo from p inside div"),
// ]);

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(el);

// -------------------------------
// jsx -> js -> browser ✅
// jsx -> browser ❌

// let el = (
//   <div>
//     <h1>
//       <span>helllo </span>
//     </h1>
//     <p>hello p</p>
//   </div>
// );

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(el);

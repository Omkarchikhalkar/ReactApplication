import React from 'react';

// functional component to illustrate props
function DemoComponent({ user }) {
  console.log("KP");
  return (
    <div>
      {/*accessing information from props */}
      <center>
        <h1>Props</h1>
      </center>
      <h2>Hello {user}</h2>
      <h3>Welcome to React props</h3>
    </div>
  );
}

export default DemoComponent;
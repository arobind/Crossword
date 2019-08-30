import React from "react";
import ReactDOM from "react-dom";

export default class CrossWord extends React.Component {
  render() {
    var crossW = [
      ['s', 'i', 't', 'e', 0, 'c', 'a', 'n', 's'],
      ['u', 0, 'e', 0, 0, 0, 'l', 0, 'e'],
      ['b', 'e', 'e', 's', 0, 's', 'i', 'd', 'e'],
      [0, 'n', 0, 'a', 'n', 't', 0, 'r', 0],
      ['i', 'd', 'a', 's', 0, 'a', 'x', 'i', 's'],
      [0, 'e', 0, 's', 'u', 'n', 0, 'v', 0],
      ['i', 'd', 'l', 'y', 0, 'd', 'e', 'e', 'r'],
      ['v', 0, 'o', 0, 0, 0, 'v', 0, 'e'],
      ['e', 'a', 's', 't', 0, 'r', 'e', 'a', 'd']
    ];
    
    return (
      <div className="App">
        <h2>Cross Word</h2>
        <div>
        {crossW.map((row, x_index) => {

          return (<div> {
            row.map((letter, y_index) => {

              if (letter === 0) { return (<BlankBox />) }
              else { return (<SquareBox val={[letter,x_index,y_index]} />) }
            }
            )
          }</div>)
        })
        }
        </div>
        <div></div>
        <div><ClueBox /></div>
        
      </div>
      
    );
  }
}



class SquareBox extends React.Component {
  constructor(props) {
    super(props);
    this.checkCorrect = this.checkCorrect.bind(this)
  }

  checkCorrect(e) {
    console.log(this.props.val)
    e.target.value = e.target.value.toUpperCase();
    if (e.target.value === this.props.val[0].toUpperCase()) {
      e.target.style.backgroundColor = "#b5e7a0";
      e.target.value = e.target.value.toUpperCase();
      e.target.disabled = true;
    }

  }
  render() {
    return (
      <span id={[this.props.val[1],this.props.val[2]].join()}>
        <input id = "" type="text" class="box Sq_box" onInput={(e) => this.checkCorrect(e)} maxLength="1" on size="1" />
      </span>
    );
  }
}
function BlankBox(props) {
  return (
    <span >
      <input type="text" class="box Bl_box" disabled maxLength="1" size="1" />
    </span>
  );
}
function ClueBox(props) {
  const question_across = 
    [
      'Across',
      '1. Locale',
      '3. Soup containers',
      '6. Nectar gatherers',
      '9. Fries or slaw',
      '11. Household pest',
      '12. Belonging to Ida',
      '13. ___ of Evil',
      '14. Morning riser',
      '15. Lazily',
      '17. Buck or doe',
      '20. Sunrise direction',
      '21. You do this with a book'
    ];
    const question_down =     [
      'Down',
      '1. Long sandwich',
      '2. Casual top',
      '4. ___ Baba',
      '5. Observe',
      '7. Concluded',
      '8. Cheeky',
      '9. Don\'t sit',
      '10. Tee off',
      '15. "If ___ said it once..."',
      '16. ___ Angeles',
      '18. New Year\'s ___',
      '19. Scarlet or Maroon'
    ];
  return (
<div class="row">
  <div class="column">
    {question_down.map((qd)=>{return <div>{qd}</div>})}
  </div>
  <div class="column">
  {question_across.map((qd)=>{return <div>{qd}</div>})}
  </div>
</div>
  );
}
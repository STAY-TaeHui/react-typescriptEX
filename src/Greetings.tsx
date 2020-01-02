import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?:string;
  onClick: (name:string)=> void;
};

function Greetings({name, mark, optional, onClick} : GreetingsProps){//화살표 함수 미사용
    const handleClick =() => onClick(name);
    return (
        <div>
            Hello, {name}{mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}
// const Greetings = ({ name, mark }:GreetingsProps) => (  //화살표함수 사용
//   <div>
//     Hello, {name} {mark}
//   </div>
// );

// 결국 무의미해진 defaultProps?
Greetings.defaultProps = {
  mark: '!' 
};

export default Greetings;
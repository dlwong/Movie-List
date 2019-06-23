
var MovieListEntry = (props) => (
        <div>
            <button onClick={() => props.handleToggle(props.title)}>
               {props.watched ? 'WATCHED' : 'TO WATCH'}
            </button>  
        </div>
);

export default MovieListEntry;

// class MovieListEntry extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             toggle: false
//                      };
//     }

//     handleToggle() {
//         this.setState(state => ({
//             toggle: !state.toggle
//           }));
//         //this.props.items.watched = !this.props.items.watched
//     }

//     render() {
//         return (
//         <div>
//             <button onClick={this.handleToggle.bind(this)}>
//                {this.state.toggle ? 'WATCHED' : 'TO WATCH'}
//             </button>  
//         </div>
//         )
//     }
// };
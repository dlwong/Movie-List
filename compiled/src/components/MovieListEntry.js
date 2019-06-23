
var MovieListEntry = props => React.createElement(
   'div',
   null,
   React.createElement(
      'button',
      { onClick: () => props.handleToggle(props.title) },
      props.watched ? 'WATCHED' : 'TO WATCH'
   )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwiaGFuZGxlVG9nZ2xlIiwidGl0bGUiLCJ3YXRjaGVkIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsaUJBQWtCQyxLQUFELElBQ2I7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLFFBQVEsU0FBUyxNQUFNQSxNQUFNQyxZQUFOLENBQW1CRCxNQUFNRSxLQUF6QixDQUF2QjtBQUNJRixZQUFNRyxPQUFOLEdBQWdCLFNBQWhCLEdBQTRCO0FBRGhDO0FBREosQ0FEUjs7QUFRQSxlQUFlSixjQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIE1vdmllTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZVRvZ2dsZShwcm9wcy50aXRsZSl9PlxuICAgICAgICAgICAgICAge3Byb3BzLndhdGNoZWQgPyAnV0FUQ0hFRCcgOiAnVE8gV0FUQ0gnfVxuICAgICAgICAgICAgPC9idXR0b24+ICBcbiAgICAgICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTtcblxuLy8gY2xhc3MgTW92aWVMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbi8vICAgICAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgICAgICB0aGlzLnN0YXRlID0ge1xuLy8gICAgICAgICAgICAgdG9nZ2xlOiBmYWxzZVxuLy8gICAgICAgICAgICAgICAgICAgICAgfTtcbi8vICAgICB9XG5cbi8vICAgICBoYW5kbGVUb2dnbGUoKSB7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbi8vICAgICAgICAgICAgIHRvZ2dsZTogIXN0YXRlLnRvZ2dsZVxuLy8gICAgICAgICAgIH0pKTtcbi8vICAgICAgICAgLy90aGlzLnByb3BzLml0ZW1zLndhdGNoZWQgPSAhdGhpcy5wcm9wcy5pdGVtcy53YXRjaGVkXG4vLyAgICAgfVxuXG4vLyAgICAgcmVuZGVyKCkge1xuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpfT5cbi8vICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZ2dsZSA/ICdXQVRDSEVEJyA6ICdUTyBXQVRDSCd9XG4vLyAgICAgICAgICAgICA8L2J1dHRvbj4gIFxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKVxuLy8gICAgIH1cbi8vIH07Il19
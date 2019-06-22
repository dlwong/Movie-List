
class MovieListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    handleToggle() {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.handleToggle.bind(this) },
                this.state.toggle ? 'WATCHED' : 'TO WATCH'
            )
        );
    }
};

export default MovieListEntry;

{/* <button class="tablinks" onclick="openCity(event, 'London')">Watched</button>
    <button class="tablinks" onclick="openCity(event, 'Paris')">To Watch</button> */}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlIiwiaGFuZGxlVG9nZ2xlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsY0FBTixTQUE2QkMsTUFBTUMsU0FBbkMsQ0FBNkM7QUFDekNDLGdCQUFZQyxLQUFaLEVBQWtCO0FBQ2QsY0FBTUEsS0FBTjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUTtBQURDLFNBQWI7QUFHSDs7QUFFREMsbUJBQWU7QUFDWCxhQUFLQyxRQUFMLENBQWNILFVBQVU7QUFDcEJDLG9CQUFRLENBQUNELE1BQU1DO0FBREssU0FBVixDQUFkO0FBR0g7O0FBSURHLGFBQVM7QUFDTCxlQUNBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUSxTQUFTLEtBQUtGLFlBQUwsQ0FBa0JHLElBQWxCLENBQXVCLElBQXZCLENBQWpCO0FBQ0kscUJBQUtMLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixTQUFwQixHQUFnQztBQURwQztBQURKLFNBREE7QUFPSDtBQXhCd0MsQ0F5QjVDOztBQUVELGVBQWVOLGNBQWY7O0FBRUEsQ0FBQztvRkFDZ0YiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlVG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICB0b2dnbGU6ICFzdGF0ZS50b2dnbGVcbiAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2dnbGUgPyAnV0FUQ0hFRCcgOiAnVE8gV0FUQ0gnfVxuICAgICAgICAgICAgPC9idXR0b24+ICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTtcblxuey8qIDxidXR0b24gY2xhc3M9XCJ0YWJsaW5rc1wiIG9uY2xpY2s9XCJvcGVuQ2l0eShldmVudCwgJ0xvbmRvbicpXCI+V2F0Y2hlZDwvYnV0dG9uPlxuPGJ1dHRvbiBjbGFzcz1cInRhYmxpbmtzXCIgb25jbGljaz1cIm9wZW5DaXR5KGV2ZW50LCAnUGFyaXMnKVwiPlRvIFdhdGNoPC9idXR0b24+ICovfSJdfQ==
import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
           <>
           <div className="IntroSection mt-5 ">
      <h1>Welcome to Marudhar</h1>
           </div>
           <div className="about-section-box mt-5 mb-5">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
                
					<div className="sectionIntro"></div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column pt-4">
						
						<h4>Our Story</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
						{/* /<a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a> */}
					</div>
				</div>
			</div>
		</div>
	</div>

    <div className="qt-box qt-background">
		<div className="container">
			<div className="row">
				<div className="col-md-8 ml-auto mr-auto text-left">
					<p className="lead ">
						" If you're not the one cooking, stay out of the way and compliment the chef. "
					</p>
					<span className="lead">Abdul Naeem Gouri</span>
				</div>
			</div>
		</div>
	</div>
</>           
        );
    }
}

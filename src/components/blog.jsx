import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/geekculture/9-visual-studio-code-extensions-that-make-programming-easier-6bbdacc15b6" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small></small> | <small>  </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="blog.html">9 Visual Studio Code Extensions That Make Programming Easier</a></h3>
							<p>You must have faced problems while writing your code. Like it takes lot of time to complete, you get errors, end up thinking programming is 
								not your cup of tea.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://enlear.academy/top-5-programming-languages-to-learn-in-2022-27f5d21ca6bc" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small> </small> | <small>  </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="blog.html">Top 5 Programming languages to learn in 2022</a></h3>
							<p>In this blog, we will discuss the top 10 programming languages to learn in 2022. So let’s get started.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://enlear.academy/all-about-full-stack-development-the-complete-guide-3eab236046d9" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small></small> | <small>  </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="blog.html">All about Full Stack Development- The complete guide</a></h3>
							<p>This is the complete guide on how to become a full-stack web developer, which language should you learn, opportunities, salary, and much more…</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="https://medium.com/@aaquibdev" className="btn btn-primary btn-lg btn-load-more">Read more </a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}

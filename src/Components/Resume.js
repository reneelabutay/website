import React, {Component} from 'react';

export class Resume extends Component {

    render () {
      return (
        <div className="resume-page">
            <div className="section-header">
                <p>Resume</p>
            </div>
            <div className="section-content"> 
                  <div className="resume-section" id="education">
                    <div className="resume-section-header">
                      <h2>Education</h2>
                    </div>
                    <div className="resume-content">
                      <div className="resume-item" id="college">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>UC Santa Barbara, College of Creative Studies</p>
                            <div id="degree">
                              <p>B.S. in Computer Science</p>
                              <p>Certificate in Technology Management</p>
                            </div>
                          </div>
                          <div className="item-date-location">
                            <p>Expected Graduation — June 2021</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>

                        <div className="resume-description" id="coursework">
                          <h2>Relevant Coursework:</h2>
                          <ul>
                            <li>Human Computer Interaction</li>
                            <li>Artificial Intelligence</li>
                            <li>Introduction to Computational Science</li>
                            <li>Computer Architecture</li>
                            <li>Automata and Formal Languages</li>
                            <li>Data Structures and Algorithms I-II</li>
                            <li>Object Oriented Design and Implementation</li>
                            <li>Problem Solving with Computers I-II</li>
                            <li>SAS Base Programming</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume-section" id="extracurriculars">
                    <div className="resume-section-header">
                      <h2>Leadership</h2>
                    </div>
                    <div className="resume-content"> 
                    <div className="resume-item" id="akpsi">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>Alpha Kappa Psi - Professional Business Fraternity</p>
                            <div id="role">
                              <p>Vice President of Professional Affairs</p>
                            </div>
                          </div>
                          <div className="item-date-location">
                            <p>April 2019 - Present</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Acquire new sponsors for fraternity events and increase 
                                fraternity exposure on campus.</p>
                            </li>
                            <li><p>Augment social media outreach by 200% by directing 
                              traffic from sponsor’s accounts and use of trends.</p></li>
                            <li><p>Lead a cross-functional team to secure partnerships 
                              with local businesses and organize 12 fundraisers, generating a $3,500
                              profit in 8 weeks.</p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>Alpha Sigma Kappa - Women in Technical Studies</p>
                            <div id="role">
                              <p>Founding Sister and Communications Chair</p>
                            </div>
                          </div>
                          <div className="item-date-location">
                            <p>October 2017 - June 2019</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Designed graphics for various fundraisers and sisterhood events.</p>
                            </li>
                            <li><p>Managed social media platforms and organized advertising plans
                              that increased exposure and fundraising profits by 50% and 20%, respectively.</p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>UCSB Rowing Team</p>
                            <div id="role">
                              <p>Lightweight Bow Seat</p>
                            </div>
                          </div>
                          <div className="item-date-location">
                            <p>September 2017 - June 2018</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Competed against ACRA teams across the United States.</p>
                            </li>
                            <li><p>Attended practice at 5 AM Monday through Saturday and 
                              completed over 780 hours of committed training.</p></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="resume-section" id="work-experience">
                    <div className="resume-section-header">
                      <h2>Experience</h2>
                    </div>
                    <div className="resume-content">
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>Student Engineer</p>
                            <div>
                              <p>UCSB Enterprise Technology Services</p>
                            </div>
                            
                          </div>
                          <div className="item-date-location">
                            <p>October 2019 - Present</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Provide IT technical support services and account-maintenance tasks 
                                for 20,000+ end users.</p>
                            </li>
                            <li><p>Perform diagnostics and troubleshooting of multiple issues; 
                              utilize ServiceNow to document help-desk tickets and resolutions.</p></li>
                            <li><p>Develop automated processes using Google Apps Script.</p></li>
                            <li><p>Conduct data manipulation through scripting and 
                              VLOOKUP to identify key metrics; create dashboards in PowerBI that helped
                                    boost UCSB employee training compliance by 15%.</p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>Undergraduate Research Assistant</p>
                            <div>
                              <p>UCSB Gevirtz Graduate School of Education</p>
                            </div>
                            
                          </div>
                          <div className="item-date-location">
                            <p>December 2017 - June 2018</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Co-developed BlockBased VR, a virtual reality game that reflects fundamental 
                                coding concepts through visual programming.</p>
                            </li>
                            <li><p>Used Blender and Unity to enhance user interface.</p></li>
                            <li><p>Collaborated in an agile environment to restructure the code into a MVC framework.</p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>SIMS Research Intern</p>
                            <div>
                              <p>California NanoSystems Institute (CNSI)</p>
                            </div>
                            
                          </div>
                          <div className="item-date-location">
                            <p>August 2017</p>
                            <div><p>Santa Barbara, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li><p>The Summer Institute of Math and Science (SIMS) is a selective 2 week program for
                              freshmen STEM majors at UCSB.</p></li>
                            <li>
                              <p>Conducted research in Dr. Irene Chen’s lab on the evolving 
                                functions of RNA, how riboswitches affect gene expression, and its impact 
                                on the origin of life.</p>
                            </li>
                            <li><p>Participated in accelerated math and science courses and presented
                              research findings to faculty.</p></li>
                          </ul>
                        </div>
                      </div>
                      <div className="resume-item" id="ask">
                        <div className="resume-item-title">
                          <div className="item-role-company">
                            <p>Math Instructor</p>
                            <div>
                              <p>Mathnasium Learning Center</p>
                            </div>
                            
                          </div>
                          <div className="item-date-location">
                            <p>July 2015 - August 2017</p>
                            <div><p>San Mateo, CA</p></div>
                          </div>
                        </div>
                        <div className="resume-description">
                          <ul>
                            <li>
                              <p>Provided supplemental math assistance to students from grades K-10.</p>
                            </li>
                            <li><p>Assisted in administrative tasks and administered written and oral exams.</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume-section" id="skills">
                    <div className="resume-section-header">
                      <h2>Skills</h2>
                    </div>
                    <div className="resume-content">
                      <div className="skills-container">
                        <div>C++</div>
                        <div>Python</div>
                        <div>Java</div>
                        <div>JavaScript</div>
                        <div>HTML/CSS</div>
                        <div>SQL</div>
                        <div>SAS</div>
                      </div>
                      <div className="skills-container">
                        <div>React</div>
                        <div>NodeJS</div>
                        <div>Figma</div>
                        <div>Google Apps Script</div>
                        <div>Git/Github</div>
                        <div>LaTeX</div>
                        <div>AWS</div>
                        <div>Adobe Photoshop</div>
                        <div>Microsoft Office Suite</div>
                        <div>WordPress</div>
                        <div>GSuite</div>
                        <div>Google Analytics</div>
                      </div>

                    </div>
                    
                  </div>  
                

                
            </div>
        </div>
      );
    }
  }
  export default Resume;
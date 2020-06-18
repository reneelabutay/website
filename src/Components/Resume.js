import React, {Component} from 'react';

export class Resume extends Component {

    render () {
      return (
        <div className="resume-page">
            <div className="section-spacer" id="experience-section-spacer">
              <div className="section-spacer-left"></div>
              <div className="section-spacer-right"></div>
            </div>
            <div className="section-header" id="resume-section-header">
                <p>Experience</p>
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
                              <p>Acquire new sponsors for fraternity events and increase 
                                fraternity exposure on campus. Improve social media outreach by 200% 
                                by directing traffic from sponsor’s accounts and use of trends. 
                                Lead a cross-functional team to secure partnerships 
                              with local businesses and organize 12 fundraisers, generating a $3,500
                              profit in 8 weeks.</p>
                        </div>
                        <div className="skills-container">
                          <div>Public Speaking</div>
                          <div>Team Management</div>
                          <div>Social Media</div>
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
                              <p>Designed graphics for sisterhood events and managed social media platforms 
                              that increased exposure and fundraising profits by 50% and 20%, respectively.</p>
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
                              <p>Competed against ACRA teams across the United States.
                           Attended practice at 5 AM Monday through Saturday and 
                              completed over 780 hours of committed training.</p>
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
                              <p>Provide IT technical support services and account-maintenance tasks 
                                for 20,000+ end users. Develop automated processes using Google Apps Script 
                                and compiled data into PowerBI dashboards.
                            </p>
                        </div>
                        <div className="skills-container">
                          <div>Google Apps Script</div>
                          <div>Microsoft Excel</div>
                          <div>Power BI</div>
                          <div>Amazon Web Services</div>
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

                              <p>Co-developed BlockBased VR, a virtual reality game that reflects fundamental 
                                coding concepts through visual programming. Focused on improving game graphics and  
                                restructuring the code into a MVC framework.
                              </p>
                          
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
                        <p>A selective 2 week program for
                              freshmen STEM majors at UCSB.
                              Conducted research in Dr. Irene Chen’s lab on the evolving 
                              functions of RNA and how riboswitches affect gene expression.
                              Participated in accelerated math and science courses and presented
                              research findings to faculty.</p>
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
                              <p>Provided supplemental math assistance to students from grades K-10.
                            Assisted in administrative tasks and administered written and oral exams.</p>
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
            <div className="section-spacer" id="project-section-spacer"></div>
        </div>
      );
    }
  }
  export default Resume;
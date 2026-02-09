"use client";

import { useState } from 'react';
import Link from 'next/link';


interface AuthFormProps {
    mode: 'signin' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('Saint Lucia'); // Default from screenshot
    const [showPassword, setShowPassword] = useState(false);

    const isSignUp = mode === 'signup';

    // Password validation checks
    const hasLength = password.length >= 8 && password.length <= 15;
    const hasCase = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        <div className="auth-card bg-white p-4 p-md-5 w-100 position-relative" style={{ borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.5)" }}>

            <div className="w-100">
                <h2 className="text-center fw-bold mb-4" style={{ color: "#000", fontSize: "24px" }}>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>

                {/* Tabs */}
                <div className="d-flex mb-4 border-bottom">
                    <Link
                        href="/accounts/signIn"
                        className={`flex-fill text-center pb-3 text-decoration-none fw-bold ${!isSignUp ? 'border-dark' : ''}`}
                        style={{
                            color: !isSignUp ? '#0f4941' : '#ccc',
                            borderBottom: !isSignUp ? '2px solid #0f4941' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/accounts/signUp"
                        className={`flex-fill text-center pb-3 text-decoration-none fw-bold ${isSignUp ? 'border-dark' : ''}`}
                        style={{
                            color: isSignUp ? '#0f4941' : '#ccc',
                            borderBottom: isSignUp ? '2px solid #0f4941' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Create an account
                    </Link>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Country - Full List */}
                    {isSignUp && (
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label small fw-bold text-muted">Country / Region of residence *</label>
                            <div className="position-relative">
                                <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                                    <i className="fas fa-globe"></i>
                                </span>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="form-select p-3 ps-5"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    style={{ borderRadius: "8px", border: "1px solid #dee2e6", fontSize: "16px", backgroundColor: "#f8f9fa" }}
                                >
                                    <option value="" disabled>Select Country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cabo Verde">Cabo Verde</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Eswatini (fmr. Swaziland)">Eswatini (fmr. Swaziland)</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Holy See">Holy See</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="North Macedonia">North Macedonia</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine State">Palestine State</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* Email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label small fw-bold text-muted">Your email address *</label>
                        <div className="position-relative">
                            <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                id="email"
                                name="email"
                                autoComplete="email"
                                type="email"
                                className="form-control p-3 ps-5"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ borderRadius: "8px", border: "1px solid #dee2e6", fontSize: "16px", backgroundColor: "#f8f9fa", transition: "all 0.3s" }}
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4 position-relative">
                        <label htmlFor="password" className="form-label small fw-bold text-muted">{isSignUp ? 'Create a password for the account *' : 'Password'}</label>
                        <div className="position-relative">
                            <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted" style={{ zIndex: 5 }}>
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                id="password"
                                name="password"
                                autoComplete={isSignUp ? "new-password" : "current-password"}
                                type={showPassword ? "text" : "password"}
                                className="form-control p-3 ps-5"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ borderRadius: "8px", border: "1px solid #dee2e6", fontSize: "16px", backgroundColor: "#f8f9fa" }}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn position-absolute top-50 end-0 translate-middle-y text-muted"
                                style={{ border: 'none', background: 'transparent' }}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {isSignUp && (
                            <div className="text-end text-muted small mt-1">
                                {password.length}/4
                            </div>
                        )}
                    </div>

                    {/* Password Validation Checklist (SignUp Only) */}
                    {isSignUp && (
                        <div className="mb-4">
                            <ul className="list-unstyled small mb-0">
                                <li className={hasLength ? "text-success" : "text-danger"}>
                                    <i className={`fas ${hasLength ? 'fa-check' : 'fa-circle'} me-2 small`}></i> Between 8-15 characters
                                </li>
                                <li className={hasCase ? "text-success" : "text-danger"}>
                                    <i className={`fas ${hasCase ? 'fa-check' : 'fa-circle'} me-2 small`}></i> At least one upper and one lower case letter
                                </li>
                                <li className={hasNumber ? "text-success" : "text-danger"}>
                                    <i className={`fas ${hasNumber ? 'fa-check' : 'fa-circle'} me-2 small`}></i> At least one number
                                </li>
                                <li className={hasSpecial ? "text-success" : "text-danger"}>
                                    <i className={`fas ${hasSpecial ? 'fa-check' : 'fa-circle'} me-2 small`}></i> At least one special character
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Forgot Password (SignIn Only) */}
                    {!isSignUp && (
                        <div className="text-center mt-3">
                            <a href="https://user.flexymarkets.com/accounts/resetPassword" style={{ color: "#0056b3", textDecoration: "none", fontSize: "14px" }}>
                                I forgot my password
                            </a>
                        </div>
                    )}

                    {/* Continue Button */}
                    <button
                        className="btn w-100 fw-bold py-3"
                        style={{ backgroundColor: "#0f4941", color: "#fff", borderRadius: "4px", fontSize: "16px" }}
                    >
                        Continue
                    </button>

                    {/* Switch Link footer */}
                    <div className="mt-4 text-center">
                        <p className="small text-muted mb-0">
                            {isSignUp ? "Already have an account?" : "New here?"}{" "}
                            <Link href={isSignUp ? "/accounts/signIn" : "/accounts/signUp"} style={{ color: "#0f4941", fontWeight: "bold", textDecoration: "none" }}>
                                {isSignUp ? "Sign in" : "Sign up"}
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
}

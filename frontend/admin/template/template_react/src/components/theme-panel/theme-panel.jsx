import React from 'react';
import { AppSettings } from './../../config/app-settings.js';

class ThemePanel extends React.Component {
	static contextType = AppSettings;
	
	constructor(props) {
		super(props);
		
		this.state = {
			expand: false,
			theme: (localStorage && typeof localStorage.appTheme !== 'undefined') ?  localStorage.appTheme : 'teal',
			darkMode: false
		}
		this.theme = ['red','pink','orange','yellow','lime','green','teal','cyan','blue','purple','indigo','dark'];
	}
	
	handleDarkMode = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppDarkMode(true);
		} else {
			this.context.handleSetAppDarkMode(false);
		}
	}
	
	handleHeaderFixed = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppHeaderFixed(true);
		} else {
			this.context.handleSetAppHeaderFixed(false);
		}
	}
	
	handleSidebarFixed = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppSidebarFixed(true);
		} else {
			this.context.handleSetAppSidebarFixed(false);
		}
	}
	
	handleHeaderInverse = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppHeaderInverse(true);
		} else {
			this.context.handleSetAppHeaderInverse(false);
		}
	}
	
	handleSidebarGrid = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppSidebarGrid(true);
		} else {
			this.context.handleSetAppSidebarGrid(false);
		}
	}
	
	handleGradientEnabled = (e) => {
		if (e.target.checked) {
			this.context.handleSetAppGradientEnabled(true);
		} else {
			this.context.handleSetAppGradientEnabled(false);
		}
	}
	
	toggleExpand = (e) => {
		e.preventDefault();
		this.setState(state => ({
			expand: !this.state.expand
		}));
	}
	
	toggleTheme = (e, theme) => {
		e.preventDefault();
		this.context.handleSetAppTheme(theme);
		this.setState(state => ({
			theme: theme
		}));
	}
	
	render() {
		return (
			<AppSettings.Consumer>
				{({appDarkMode, appHeaderFixed, appHeaderInverse, appSidebarFixed, appSidebarGrid, appGradientEnabled}) => (
					<div className={'theme-panel ' + (this.state.expand ? 'active' : '')}>
						<a href="#0" onClick={ e => this.toggleExpand(e) } aria-label='theme-collapse-btn' className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
						<div className="theme-panel-content" data-scrollbar="true" data-height="100%" style={{color: "#4B5053"}}>
							<h5>App Settings</h5>
				
							<div className="theme-list">
								{this.theme.map((theme, i) => (
									<div key={i} className={'theme-list-item '+ ((this.state.theme === theme) ? 'active' : '')}>
										<a href="#0" aria-label="theme-list-link" onClick={ e => this.toggleTheme(e, theme) } className={'theme-list-link bg-'+ theme}>&nbsp;</a>
									</div>
								))}
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<div className="row mt-10px">
								<div className="col-8 control-label text-dark fw-bold">
									<div>Dark Mode <span className="badge ms-1 py-2px position-relative" style={{top: '-1px', backgroundColor: "#165998"}}>NEW</span></div>
									<div className="lh-14">
										<small className="text-dark opacity-50">
											Adjust the appearance to reduce glare and give your eyes a break.
										</small>
									</div>
								</div>
								<div className="col-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" name="app-theme-dark-mode" onChange={this.handleDarkMode} id="appThemeDarkMode" checked={appDarkMode} value="1" />
										<label className="form-check-label" htmlFor="appThemeDarkMode">&nbsp;</label>
									</div>
								</div>
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<div className="row mt-10px align-items-center">
								<div className="col-8 control-label text-dark fw-bold">Header Fixed</div>
								<div className="col-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" name="app-header-fixed" onChange={this.handleHeaderFixed} id="appHeaderFixed" value="1" checked={appHeaderFixed} />
										<label className="form-check-label" htmlFor="appHeaderFixed">&nbsp;</label>
									</div>
								</div>
							</div>
							<div className="row mt-10px align-items-center">
								<div className="col-8 control-label text-dark fw-bold">Header Inverse</div>
								<div className="col-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" name="app-header-inverse" onChange={this.handleHeaderInverse} id="appHeaderInverse" checked={appHeaderInverse} />
										<label className="form-check-label" htmlFor="appHeaderInverse">&nbsp;</label>
									</div>
								</div>
							</div>
							<div className="row mt-10px align-items-center">
								<div className="col-8 control-label text-dark fw-bold">Sidebar Fixed</div>
								<div className="col-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" name="app-sidebar-fixed" onChange={this.handleSidebarFixed} id="appSidebarFixed" checked={appSidebarFixed} />
										<label className="form-check-label" htmlFor="appSidebarFixed">&nbsp;</label>
									</div>
								</div>
							</div>
							<div className="row mt-10px align-items-center">
								<div className="col-8 control-label text-dark fw-bold">Sidebar Grid</div>
								<div className="col-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" onChange={this.handleSidebarGrid} name="app-sidebar-grid" id="appSidebarGrid" checked={appSidebarGrid} />
										<label className="form-check-label" htmlFor="appSidebarGrid">&nbsp;</label>
									</div>
								</div>
							</div>
							<div className="row mt-10px align-items-center">
								<div className="col-md-8 control-label text-dark fw-bold">Gradient Enabled</div>
								<div className="col-md-4 d-flex">
									<div className="form-check form-switch ms-auto mb-0">
										<input aria-label='form-check-input' type="checkbox" className="form-check-input" name="app-gradient-enabled" onChange={this.handleGradientEnabled} id="appGradientEnabled" checked={appGradientEnabled} />
										<label className="form-check-label" htmlFor="appGradientEnabled">&nbsp;</label>
									</div>
								</div>
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<h5>Admin Design (5)</h5>
							<div className="theme-version">
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_html/index_v2.html" className="theme-version-link active">
										<span style={{backgroundImage: 'url(/assets/img/theme/default.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_transparent/index_v2.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/transparent.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_apple/index_v2.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/apple.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_material/index_v2.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/material.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_facebook/index_v2.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/facebook.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_google/index_v2.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/google.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<h5>Language Version (7)</h5>
							<div className="theme-version">
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_html/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/html.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_ajax/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/ajax.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_angularjs/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/angular1x.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_angularjs13/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/angular10x.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="#0" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/laravel.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_vuejs/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/vuejs.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../template_reactjs/index.html" className="theme-version-link active">
										<span style={{backgroundImage: 'url(/assets/img/version/reactjs.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="#0" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/version/dotnet.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<h5>Frontend Design (5)</h5>
							<div className="theme-version">
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../../../frontend/template/template_one_page_parallax/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/one-page-parallax.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../../../frontend/template/template_e_commerce/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/e-commerce.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../../../frontend/template/template_blog/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/blog.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../../../frontend/template/template_forum/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/forum.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
								<div className="theme-version-item">
									<a aria-label='theme-version-link' href="../../../frontend/template/template_corporate/index.html" className="theme-version-link">
										<span style={{backgroundImage: 'url(/assets/img/theme/corporate.jpg)'}} className="theme-version-cover"></span>
									</a>
								</div>
							</div>
				
							<div className="theme-panel-divider"></div>
				
							<a aria-label='theme-version-link' href="https://seantheme.com/color-admin/documentation/" className="btn btn-dark d-block w-100 rounded-pill mb-10px" target="_blank" rel="noreferrer"><b>Documentation</b></a>
							<a aria-label='reset-local-storage' href="#0" className="btn btn-default d-block w-100 rounded-pill" data-toggle="reset-local-storage"><b>Reset Local Storage</b></a>
						</div>
					</div>
				)}
			</AppSettings.Consumer>
		);
	}
};

export default ThemePanel;

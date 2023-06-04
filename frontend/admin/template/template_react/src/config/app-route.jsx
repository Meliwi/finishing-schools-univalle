import React from 'react';
import { Outlet } from 'react-router-dom';

import App from './../app.jsx';

import DashboardV1 from './../pages/dashboard/dashboard-v1.js';
import DashboardV2 from './../pages/dashboard/dashboard-v2.js';
import DashboardV3 from './../pages/dashboard/test.js';
import EmailInbox from './../pages/email/email-inbox.js';
import EmailCompose from './../pages/email/email-compose.js';
import EmailDetail from './../pages/email/email-detail.js';
import Widgets from './../pages/widget/widget.js';
import UIGeneral from './../pages/ui/ui-general.js';
import UITypography from './../pages/ui/ui-typography.js';
import UITabsAccordion from './../pages/ui/ui-tabs-accordion.js';
import UIModalNotification from './../pages/ui/ui-modal-notification.js';
import UIWidgetBoxes from './../pages/ui/ui-widget-boxes.js';
import UIMediaObject from './../pages/ui/ui-media-object.js';
import UIButtons from './../pages/ui/ui-buttons.js';
import UIIconFontAwesome from './../pages/ui/ui-icon-fontawesome.js';
import UIIconBootstrap from './../pages/ui/ui-icon-bootstrap.js';
import UIIconSimpleLineIcons from './../pages/ui/ui-icon-simple-line-icons.js';
import UILanguageBarIcon from './../pages/ui/ui-language-bar-icon.js';
import UISocialButtons from './../pages/ui/ui-social-buttons.js';
import Bootstrap5 from './../pages/bootstrap/bootstrap-5.js';
import FormElements from './../pages/form/form-elements.js';
import FormPlugins from './../pages/form/form-plugins.js';
import FormWizards from './../pages/form/form-wizards.js';
import TableElements from './../pages/table/table-elements.js';
import TablePlugins from './../pages/table/table-plugins.js';
import PosCustomerOrder from './../pages/pos/customer-order.js';
import PosKitchenOrder from './../pages/pos/kitchen-order.js';
import PosCounterCheckout from './../pages/pos/counter-checkout.js';
import PosTableBooking from './../pages/pos/table-booking.js';
import PosMenuStock from './../pages/pos/menu-stock.js';
import ChartJS from './../pages/chart/chart-js.js';
import ChartApex from './../pages/chart/chart-apex.js';
import Calendar from './../pages/calendar/calendar.js';
import Map from './../pages/map/map.js';
import Gallery from './../pages/gallery/gallery.js';
import PageBlank from './../pages/option/page-blank.js';
import PageWithFooter from './../pages/option/page-with-footer.js';
import PageWithFixedFooter from './../pages/option/page-with-fixed-footer.js';
import PageWithoutSidebar from './../pages/option/page-without-sidebar.js';
import PageWithRightSidebar from './../pages/option/page-with-right-sidebar.js';
import PageWithMinifiedSidebar from './../pages/option/page-with-minified-sidebar.js';
import PageWithTwoSidebar from './../pages/option/page-with-two-sidebar.js';
import PageFullHeight from './../pages/option/page-full-height.js';
import PageWithWideSidebar from './../pages/option/page-with-wide-sidebar.js';
import PageWithLightSidebar from './../pages/option/page-with-light-sidebar.js';
import PageWithMegaMenu from './../pages/option/page-with-mega-menu.js';
import PageWithTopMenu from './../pages/option/page-with-top-menu.js';
import PageWithBoxedLayout from './../pages/option/page-with-boxed-layout.js';
import PageWithMixedMenu from './../pages/option/page-with-mixed-menu.js';
import PageBoxedLayoutWithMixedMenu from './../pages/option/page-boxed-layout-with-mixed-menu.js';
import PageWithTransparentSidebar from './../pages/option/page-with-transparent-sidebar.js';
import PageWithSearchSidebar from './../pages/option/page-with-search-sidebar.js';
import ExtraTimeline from './../pages/extra/extra-timeline.js';
import ExtraComingSoon from './../pages/extra/extra-coming-soon.js';
import VacanciesSearch from './../pages/extra/extra-search.js';
import ExtraInvoice from './../pages/extra/extra-invoice.js';
import ExtraError from './../pages/extra/extra-error.js';
import ExtraProfile from './../pages/extra/extra-profile.js';
import ExtraScrumBoard from './../pages/extra/extra-scrum-board.js';
import ExtraCookieAcceptanceBanner from './../pages/extra/extra-cookie-acceptance-banner.js';
import ExtraOrders from './../pages/extra/extra-orders.js';
import ExtraOrderDetails from './../pages/extra/extra-order-details.js';
import ExtraProducts from './../pages/extra/extra-products.js';
import ExtraProductDetails from './../pages/extra/extra-product-details.js';
import LoginStudent from './../pages/user/login-student.js';
import LoginCompany from '../pages/user/login-company.js';
import LoginPortal from '../pages/user/login-portal.js';
import RegisterCompany from '../pages/user/register-company.js';
import HelperCSS from './../pages/helper/helper-css.js';
import PasswordRecovery from '../pages/user/password-recovery.js';
import PasswordRecoveryRequest from '../pages/user/password-recovery-request.js';
import ServiceDashboard from '../pages/dashboard/service-dashboard.js';
import ScrapingForm from '../pages/user/portfolio/scraping-form.js';
import PortfolioForm from '../pages/user/portfolio/portfolio-form.js';
import CompanyForm from '../pages/user/company_profile/company-form.js';
import { Navigate } from 'react-router-dom';
import { isExpired, decodeToken } from "react-jwt";

const ProtectedRoute = ({
	allow,
	redirectPath = '/',
	children,
}) => {


	if (!(allow.includes(decodeToken(localStorage.getItem("access_token")).role))) {

		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};


const AppRoute = [
	{
		path: '*',
		element: <App />,
		children: [
			{
				path: '',
				element: <LoginPortal />
			}, {
				path: 'password_recovery/',
				element: <PasswordRecovery />
			},
			{
				path: 'request_password_recovery/',
				element: <PasswordRecoveryRequest />
			},
			{
				path: 'dashboard/*',
				element:
					<ProtectedRoute
						allow={["company", "student"]}
					>

					</ProtectedRoute>,
				children: [
					{ path: 'services', element: <ServiceDashboard /> },
					{ path: 'v1', element: <DashboardV1 /> },
					{ path: 'v2', element: <DashboardV2 /> },
					{ path: 'v3', element: <DashboardV3 /> }
				]
			},
			{
				path: 'user/*',
				element: <Outlet />,
				children: [
					{ path: 'univalle/login', element: <LoginStudent /> },
					{ path: 'company/login', element: <LoginCompany /> },
					{ path: 'company/register', element: <RegisterCompany /> },

				]
			},
			{
				path: 'user/*',
				element: <ProtectedRoute
					allow={["student"]}
				>

				</ProtectedRoute>,
				children: [
					{ path: 'student/profile', element: <ScrapingForm /> },
					{ path: 'student/portfolio', element: <PortfolioForm /> },
				]
			},
			{
				path: 'user/*',
				element: <ProtectedRoute
					allow={["company"]}
				>
					
				</ProtectedRoute>,
				children: [
					{ path: 'company/profile', element: <CompanyForm /> },
					
				]

			},
			{
				path: 'vacancies/*',
				element: <ProtectedRoute
				allow={["student", "company"]}
			>

			</ProtectedRoute>,
				children: [
					{ path: 'search', element: <VacanciesSearch /> },

				]
			},

			{
				path: 'email/*',
				element: <Outlet />,
				children: [
					{ path: 'inbox', element: <EmailInbox /> },
					{ path: 'compose', element: <EmailCompose /> },
					{ path: 'detail', element: <EmailDetail /> }
				]
			},
			{
				path: 'widgets',
				element: <Widgets />
			},
			{
				path: 'ui/*',
				element: <Outlet />,
				children: [
					{ path: 'general', element: <UIGeneral /> },
					{ path: 'typography', element: <UITypography /> },
					{ path: 'tabs-accordion', element: <UITabsAccordion /> },
					{ path: 'modal-notification', element: <UIModalNotification /> },
					{ path: 'widget-boxes', element: <UIWidgetBoxes /> },
					{ path: 'media-object', element: <UIMediaObject /> },
					{ path: 'buttons', element: <UIButtons /> },
					{ path: 'icon-fontawesome', element: <UIIconFontAwesome /> },
					{ path: 'icon-bootstrap', element: <UIIconBootstrap /> },
					{ path: 'icon-simple-line-icons', element: <UIIconSimpleLineIcons /> },
					{ path: 'language-bar-icon', element: <UILanguageBarIcon /> },
					{ path: 'social-buttons', element: <UISocialButtons /> }
				]
			},
			{
				path: 'bootstrap-5',
				element: <Bootstrap5 />
			},
			{
				path: 'form/*',
				element: <Outlet />,
				children: [
					{ path: 'elements', element: <FormElements /> },
					{ path: 'plugins', element: <FormPlugins /> },
					{ path: 'wizards', element: <FormWizards /> }
				]
			},
			{
				path: 'table/*',
				element: <Outlet />,
				children: [
					{ path: 'elements', element: <TableElements /> },
					{ path: 'plugins', element: <TablePlugins /> }
				]
			},
			{
				path: 'pos/*',
				element: <Outlet />,
				children: [
					{ path: 'customer-order', element: <PosCustomerOrder /> },
					{ path: 'kitchen-order', element: <PosKitchenOrder /> },
					{ path: 'counter-checkout', element: <PosCounterCheckout /> },
					{ path: 'table-booking', element: <PosTableBooking /> },
					{ path: 'menu-stock', element: <PosMenuStock /> }
				]
			},
			{
				path: 'chart/*',
				element: <Outlet />,
				children: [
					{ path: 'js', element: <ChartJS /> },
					{ path: 'apex', element: <ChartApex /> }
				]
			},
			{
				path: 'calendar',
				element: <Calendar />
			},
			{
				path: 'map',
				element: <Map />
			},
			{
				path: 'gallery',
				element: <Gallery />
			},
			{
				path: 'page-option/*',
				element: <Outlet />,
				children: [
					{ path: 'blank', element: <PageBlank /> },
					{ path: 'with-footer', element: <PageWithFooter /> },
					{ path: 'with-fixed-footer', element: <PageWithFixedFooter /> },
					{ path: 'without-sidebar', element: <PageWithoutSidebar /> },
					{ path: 'with-right-sidebar', element: <PageWithRightSidebar /> },
					{ path: 'with-minified-sidebar', element: <PageWithMinifiedSidebar /> },
					{ path: 'with-two-sidebar', element: <PageWithTwoSidebar /> },
					{ path: 'full-height', element: <PageFullHeight /> },
					{ path: 'with-wide-sidebar', element: <PageWithWideSidebar /> },
					{ path: 'with-light-sidebar', element: <PageWithLightSidebar /> },
					{ path: 'with-mega-menu', element: <PageWithMegaMenu /> },
					{ path: 'with-top-menu', element: <PageWithTopMenu /> },
					{ path: 'with-boxed-layout', element: <PageWithBoxedLayout /> },
					{ path: 'with-mixed-menu', element: <PageWithMixedMenu /> },
					{ path: 'boxed-layout-with-mixed-menu', element: <PageBoxedLayoutWithMixedMenu /> },
					{ path: 'with-boxed-layout', element: <PageWithBoxedLayout /> },
					{ path: 'with-transparent-sidebar', element: <PageWithTransparentSidebar /> },
					{ path: 'with-search-sidebar', element: <PageWithSearchSidebar /> }
				]
			},
			{
				path: 'extra/*',
				element: <Outlet />,
				children: [
					{ path: 'timeline', element: <ExtraTimeline /> },
					{ path: 'coming-soon', element: <ExtraComingSoon /> },

					{ path: 'invoice', element: <ExtraInvoice /> },
					{ path: 'error', element: <ExtraError /> },
					{ path: 'profile', element: <ExtraProfile /> },
					{ path: 'scrum-board', element: <ExtraScrumBoard /> },
					{ path: 'cookie-acceptance-banner', element: <ExtraCookieAcceptanceBanner /> },
					{ path: 'orders', element: <ExtraOrders /> },
					{ path: 'order-details', element: <ExtraOrderDetails /> },
					{ path: 'products', element: <ExtraProducts /> },
					{ path: 'product-details', element: <ExtraProductDetails /> }
				]
			},

			{
				path: 'helper/css',
				element: <HelperCSS />
			}
		]
	}
];


export default AppRoute;
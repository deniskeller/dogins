import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import s from './BreadCrumbs.module.scss';

type Props = {
	rootPathName: string;
	roorHref: string;
	className?: string;
};

interface IBreadcrumbList {
	breadcrumb: string;
	href: string;
}

const BreadCrumbs: React.FC<Props> = ({
	rootPathName,
	roorHref,
	className = '',
}) => {
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbList[]>();

	const breadCrumbConvert = (str: string) => {
		return str
			.replace(/#.*$/, '')
			.replace(/_and_/g, ' & ')
			.replace(/-/g, ' ')
			.replace(/_/g, ' ');
	};

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split('/');
			linkPath.shift();
			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: '/' + linkPath.slice(0, i + 1).join('/'),
				};
			});
			setBreadcrumbs(pathArray);
		}
	}, [router]);

	if (!breadcrumbs) {
		return null;
	}

	return (
		<div className={`${s.BreadCrumbs} ${className}`}>
			{breadcrumbs.map((breadcrumb, i, arr) => {
				if (i === arr.length - 1) {
					return (
						<Link key={breadcrumb.href} href={breadcrumb.href}>
							<a className={`${s.Link} ${s.Link_Active}`}>
								<div className={s.Circle}>
									<BaseIcon
										icon={ALL_ICONS.CHEVERON}
										viewBox='0 0 30 30'
										className={s.Circle_Icon}
									/>
								</div>

								<div className={s.Name}>
									{breadCrumbConvert(breadcrumb.breadcrumb)}
								</div>
							</a>
						</Link>
					);
				}

				return (
					<Link key={breadcrumb.href} href={breadcrumb.href}>
						<a className={s.Link}>
							<div className={s.Circle}></div>

							<div className={s.Name}>
								{breadCrumbConvert(breadcrumb.breadcrumb)}
							</div>
						</a>
					</Link>
				);
			})}
		</div>
	);
};

export default BreadCrumbs;

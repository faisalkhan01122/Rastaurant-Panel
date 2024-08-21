import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { LuChevronRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ breadcrumbs }) => {
  return (
    <nav className="flex" aria-label="BreadCrumb">
      <ol className="inline-flex items-center">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== breadcrumbs.length - 1 ? (
              <>
                <Link to={crumb.href} className="text-sm font-medium text-red-600">
                  {crumb.label}
                </Link>
                <LuChevronRight className='text-center text-gray-400'/>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-400">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

BreadCrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BreadCrumb;

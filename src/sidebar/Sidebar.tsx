import SideBarApp from '../components/Sidebar';

const Sidebar = () => {
  document.body.className = 'absolute h-full w-full';
  return <SideBarApp />;
};

export default Sidebar;

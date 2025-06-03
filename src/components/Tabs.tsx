
interface props {
    children: React.ReactNode;
    ClassName?: string;
    logo?: React.ReactNode;
    defaultChecked?: boolean;
}

function TabsContent({ children, ClassName  }: props) {
    return (
        <div className={`tab-content bg-base-100 border-base-300 p-6 ${ClassName || ''}`}>
            {children}
        </div>
    )
};

function TabsLabel({ children, logo, defaultChecked }: props){
    return (
        <label className="tab flex items-center space-x-2">
            <input type="radio" name="my_tabs_4" defaultChecked={defaultChecked} />
            { logo && <span className="tab-icon">{logo}</span> }
            <span className="tab-title">{children}</span>
        </label>
    )
};

function Tabs({ children, ClassName }: props) {
    return (
        <div className={`tabs ${ClassName || ''}`}>
            {children}
        </div >
    )
};

export { Tabs, TabsContent, TabsLabel };
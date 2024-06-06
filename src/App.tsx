const businessCard = {
  name: "Cooper Gadd",
  school: "Rochester Institute of Technology",
  major: "Computing and Information Technologies",
  email: "coopergadd@yahoo.com",
  phone: "585 813 2699",
  linkdin: "https://www.linkedin.com/in/coopergadd",
};

export const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-garamond">
      <div className="card sm:w-144 sm:h-80 bg-base-100 shadow-xl">
        <div className="card-body space-y-10">
          <div className="flex justify-between">
            <a
              href={`tel:${businessCard.phone.replace(/ /g, "")}`}
              className="text-left md:text-xl"
            >
              {businessCard.phone}
            </a>
            <p className="text-center md:text-xl max-w-52">
              {businessCard.school}
            </p>
          </div>
          <div>
            <p className="text-center text-xl md:text-2xl">
              {businessCard.name}
            </p>
            <p className="text-center md:text-xl">{businessCard.major}</p>
          </div>
          <div>
            <p className="text-center">
              Email: <span> </span>
              <a href={`mailto:${businessCard.email}`}>{businessCard.email}</a>
            </p>
            <p className="text-center">
              LinkedIn: <span> </span>
              <a href={`${businessCard.linkdin}`} target="_blank">
                {businessCard.linkdin}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

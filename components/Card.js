import SocialIcon from './social-icons'
import Folder from './social-icons/folder.svg'

const FolderIcon = () => {
  return <Folder className="text-primary-color-500 dark:text-primary-color-dark-500 h-7 w-7" />
}

const Card = ({ title, description, date, github, tech }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-200 hover:rounded-xl hover:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2 flex flex-row items-center justify-center space-x-3">
            <FolderIcon /> <div>{date}</div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1">
              {github ? <SocialIcon kind="github" href={github} size="5" /> : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-1">
          {tech.map((t, idx) => (
            <div key={idx} className="text-sm text-gray-400">
              <div>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Card

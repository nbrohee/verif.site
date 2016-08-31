import React, { Component } from 'react'
import Admin from '../Admin/Admin.js'


class Administrations extends Component {
  constructor(props) {
    super(props)
    this.groupSiteByAdmin = this.groupSiteByAdmin.bind(this)
  }

  groupSiteByAdmin() {
    return this.props.sites.reduce((admins, site) => {
      const key = site.meta.Administration
      if(admins[key] !== undefined) {
        admins[key].push(site)
      } else {
        admins[key] = [site]
      }
      return admins
    }, {})
  }

  render() {
    const admins = this.groupSiteByAdmin()
    return (
      <div>
        <table className="site-table">
          <tbody>
            {Object.keys(admins)
              .map((name, idx) => <Admin key={idx} name={name} sites={admins[name]} />)}
            </tbody>
          </table>
      </div>
    )
  }
}

export default Administrations

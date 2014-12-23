module Routes
  def self.get(name, path)
    define_method "#{name}_path" do
      path
    end
    define_method "#{name}_url" do
      path
    end
  end

  # Define your routes
  get :home,                "/"
  get :about,               "/about"
  get :contact,             "/contact"
  get :careers,             "/careers"
  get :case_studies,        "#"
  get :partners,            "#"
  get :certs,               "#"
  get :blog,                "http://blog.advisicon.com/"
  get :store,               "http://store.advisicon.com/"
  get :project_management,  "#"
  get :technology,          "#"
  get :training,            "/training"
  get :development,         "#"
  get :bi,                  "#"
  get :support,             "#"

  get :sign_in,             "#"
  get :site_map,            "#"
  get :privacy_policy,      "#"

end

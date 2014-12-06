def list_jobs(job_category)
  job_category.each do |job|
    job_list += "<li><a href='#{ job.url }'>#{ job.title }</a></li>"
  end
  return "<ul>#{job_list}</ul>"
end


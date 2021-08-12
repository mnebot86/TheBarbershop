class RenamePasswordDigestInClients < ActiveRecord::Migration[6.1]
  def change
    rename_column(:clients, :password_digest, :password)
  end
end

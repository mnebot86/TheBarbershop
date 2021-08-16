class RenamePasswordDigest < ActiveRecord::Migration[6.1]
  def change
    rename_column(:clients, :password, :password_digest)
  end
end
